plugins {
    id("java") // Apply the java plugin correctly
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(11)) // Use Java 17 (or 11) here
    }
}
