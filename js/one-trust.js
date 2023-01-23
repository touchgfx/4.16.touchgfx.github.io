function getOptanonCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}

var isClosed = getOptanonCookie("OptanonAlertBoxClosed");

if (isClosed == null) {
    document.cookie = 'OptanonConsent=; domain=' + window.location.host + '; Path=/; Expires=Thu, 01 Jan 2000 00:00:01 GMT;';
}

var otGUID = "2bf4ec2c-9ff7-4a86-9da0-b8997eac9f7c"
if (window.location.hostname === "localhost" || window.location.pathname.includes("touchgfx-test.github.io")) {
    otGUID = "2bf4ec2c-9ff7-4a86-9da0-b8997eac9f7c-test"
}
document.write(`<script src="https:\/\/cdn.cookielaw.org\/consent\/${otGUID}\/OtAutoBlock.js" type="text/javascript"></script>`);
document.write(`<script src="https:\/\/cdn.cookielaw.org\/scripttemplates\/otSDKStub.js" type="text/javascript" charSet="UTF-8" data-domain-script="${otGUID}"></script>`);

function OptanonWrapper() {
    var dtmCookiesEnabled = typeof OnetrustActiveGroups !== "undefined" 
    && OnetrustActiveGroups.indexOf(",C0002,")>=0 
    && OnetrustActiveGroups.indexOf(",C0004,")>=0
        
    if (dtmCookiesEnabled) {
        var dtmURL = "https://assets.adobedtm.com/a86419113799/01b0e221c0d2/launch-2a820308696f.min.js"
        if (window.location.hostname === "localhost" || window.location.pathname.includes("touchgfx-test.github.io")) {
            dtmURL = "https://assets.adobedtm.com/a86419113799/01b0e221c0d2/launch-b2e52930cd27-development.min.js"
        }
        dtmScript = document.createElement('script')
        dtmScript.src = dtmURL
        document.head.appendChild(dtmScript)
    }

    if (typeof Optanon !== "undefined" && Optanon.hasOwnProperty('OnConsentChanged')) {
        Optanon.OnConsentChanged(ReloadPageOnConsentChange);
    }

    if (document.getElementById('onetrust-banner-sdk')) {
        var element = document.querySelector('.onetrust-pc-dark-filter');
        element.classList.remove('ot-hide');                       
        element.style.zIndex = 9999; 
        OneTrust.OnConsentChanged(ReloadPageOnConsentChange);
    }    
};

window.STFED = typeof STFED === 'undefined' ? {} : STFED;

var ST_ONETRUST_ACTIVE_GROUPS = "stOnetrustActiveGroups";
var ST_PREVIOUS_ONETRUST_ACTIVE_GROUPS = "stPreviousOnetrustActiveGroups";

function loadGroups(key) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + (typeof key === "undefined" ? ST_PREVIOUS_ONETRUST_ACTIVE_GROUPS : key) + "=");
    if (parts.length >= 2) {
        return decodeURIComponent(parts[parts.length - 1].split(";")[0]);
    }
    return "";
}

var stGdprActiveCookies = loadGroups(ST_ONETRUST_ACTIVE_GROUPS);

function ReloadPageOnConsentChange() {
    function storeGroups(groups, key) {
        var cookieValue = encodeURIComponent(groups);
        document.cookie = (typeof key === "undefined" ? ST_PREVIOUS_ONETRUST_ACTIVE_GROUPS : key) + "=" + cookieValue + "; Max-Age=31536000; Path=/; Domain=" + window.location.host;
    }


    var stPreviousOnetrustActiveGroups = loadGroups();
    if (OnetrustActiveGroups != stPreviousOnetrustActiveGroups) {
        storeGroups(OnetrustActiveGroups);
        storeGroups(OnetrustActiveGroups, ST_ONETRUST_ACTIVE_GROUPS);


        if (STFED.Cookies.areCookiesEnabled()) {
            if (sessionStorage.getItem('stReloadPerformed') !== 'true' &&
                document.cookie.indexOf('OptanonAlertBoxClosed') > -1) {
                document.cookie = "stOneTrustReloadPerformed=true; Max-Age=31536000; Path=/; Domain=" + window.location.host;
                sessionStorage.setItem('stReloadPerformed', 'true');
                if (!/[?&]ot=1/i.test(location.search)) {
                    location.reload();
                }
            }
        }
    }
}

STFED.Cookies = {
    areCookiesEnabled: (function () {
        var isEnabled;

        return function () {
            if (isEnabled !== undefined) {
                return isEnabled;
            }

            isEnabled = navigator.cookieEnabled;

            document.cookie = 'cookietest=1';
            if (document.cookie.indexOf('cookietest=') > -1) {
                document.cookie = 'cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT';
            } else {
                isEnabled = false;
            }

            return isEnabled;
        };
    })()
};