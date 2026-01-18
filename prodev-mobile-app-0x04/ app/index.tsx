import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useRouter } from "expo-router";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground source={BACKGROUNDIMAGE} style={styles.backgroundImageContainer}>
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => router.push("/join")}
          >
            <Text style={styles.buttonPrimaryText}>Join Now</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => router.push("/signin")}
          >
            <Text style={styles.buttonSecondaryText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

