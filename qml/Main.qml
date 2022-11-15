import QtQuick 2.7
import Ubuntu.Components 1.3
//import QtQuick.Controls 2.2
import QtQuick.Layouts 1.3
import Qt.labs.settings 1.0
import QtWebEngine 1.7
import Morph.Web 0.1

MainView {
    id: root
    objectName: 'mainView'
    applicationName: 'geforcenow.nitanmarcel'
    automaticOrientation: true
    backgroundColor : "transparent"

    width: units.gu(45)
    height: units.gu(75)

    Page {
        anchors.fill: parent

        WebView {
            id: webView
            anchors.fill: parent
            property string defaultUserAgent: "Mozilla/5.0 (Linux; Ubuntu 16.04 like Android 9) AppleWebKit/537.36 Chrome/87.0.4280.144 Mobile Safari/537.36"
            property string nowUserAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6, 2 Mobile/15E148 Safari/604.1"

            url: "https://beta.play.geforcenow.com/mall"

            context: WebContext {
                id: webContext
                userAgent: webView.nowUserAgent
                userScripts: [
                    WebEngineScript {
                        injectionPoint: WebEngineScript.DocumentCreation
                        worldId: WebEngineScript.MainWorld
                        runOnSubframes: true
                        name: "FakePWA"
                        sourceUrl: "script.js"
                    }
                ]
            }

            settings.allowRunningInsecureContent: true

            onNavigationRequested: {
                if (request.url == "https://beta.play.geforcenow.com")
                {
                    request.action = WebEngineNavigationRequest.AcceptRequest
                }
//                    webContext.userAgent = nowUserAgent
//                else
//                    webContext.userAgent = defaultUserAgent

                console.log("Requested " + request.url)
                console.log(webContext.httpUserAgent)
            }

            onNewViewRequested: {
                request.action = WebEngineNavigationRequest.IgnoreRequest
                if(request.userInitiated) {
                    Qt.openUrlExternally(request.requestedUrl)
                }
            }
            onFeaturePermissionRequested: {
                console.log("Allowing feature" + request.feature)
                grantFeaturePermission(request.url, request.feature, true)
            }

            onFullScreenRequested : function (request) {
                request.accept()
                if (request.toggleOn)
                    window.showFullScreen()
                else
                    window.showNormal()
            }
        }
    }
}
