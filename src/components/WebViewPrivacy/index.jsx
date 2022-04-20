import { WebView } from "react-native-webview";
import { style } from "./style";

export function WebViewPrivacy (){
    return (
        <WebView style={style.container}
      source={{ uri: 'https://privacytools.com.br/' }}
    />
    )
}