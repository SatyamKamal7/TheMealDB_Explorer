# Step 1 — Build the application
FROM maven:3.9.6-amazoncorretto-17 AS build
WORKDIR /app

# Copy only Maven project files
COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Step 2 — Run the application
FROM amazoncorretto:17
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
