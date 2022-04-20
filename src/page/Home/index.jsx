import { SafeAreaView } from "react-native";
import { WebViewPrivacy } from "../../components/WebViewPrivacy";
import { style } from "./style";

export function Home() {
  return (
    <SafeAreaView style={style.container}>
      <WebViewPrivacy />
    </SafeAreaView>
  );
}
