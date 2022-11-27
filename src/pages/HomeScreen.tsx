import React, { Suspense } from "react";
import { View, StyleSheet, Text  } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
                <Text>Open up App.tsx to start working on your app!</Text>
            </Suspense>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
