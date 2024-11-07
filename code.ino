#include "DHT.h"
#include <ESP32Servo.h>

Servo myservo;
int dht_pin = 16;
DHT dht(dht_pin, DHT11);
#define laser1 26
#define laser2 15
int pos = 0;
int pir_pin = 25;
const int RELAY_PIN = 17;

int resval = 0;

int water_s = 33;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  // dht.begin();
  myservo.attach(27);
  pinMode(laser1, OUTPUT);
  pinMode(laser2, OUTPUT);
  pinMode(pir_pin, INPUT);
  pinMode(RELAY_PIN, OUTPUT);
}
void servo(){
  for (pos = 0; pos <= 180; pos += 1) { 
    myservo.write(pos);    
    delay(15); 
  }
  Serial.println("SERVO DONE");
}

void tempmid(){
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);

  Serial.print("Humidity: ");
  Serial.println(h);
  Serial.print("Temperature (C): ");
  Serial.println(t);
  Serial.print("Temperature (F): ");
  Serial.println(f);
  delay(3000);
}

void twolaser(){
  // digitalWrite(laser1, HIGH);
  digitalWrite(laser2, HIGH);
  delay(1000);
  // digitalWrite(laser1, LOW);
  digitalWrite(laser2, LOW);
  delay(1000);
}

void water_sensor(){
  resval = analogRead(water_s);
  Serial.println(resval);
  if (resval <= 100){
      Serial.println("Water sensor: EMPTY");
  }
  else if (resval > 100 && resval <= 3000){
      Serial.println("Water sensor: LOW");
  }
    else if (resval > 3000 && resval <= 3300){
      Serial.println("Water sensor: MEDIUM");
  }
    else if (resval > 3300){
      Serial.println("Water sensor: HIGH");
  }
}

void relay_water(){
  digitalWrite(RELAY_PIN, HIGH); // turn on pump 5 seconds
  delay(3000);
  digitalWrite(RELAY_PIN, LOW);  // turn off pump 5 seconds
  delay(3000);
}
void loop() {

  // Serial.println("Hay nhap phim (1: Servo, 2: temp & mid, 3: laser, 4: water sensor, 5: relay water ): ");
  // if (Serial.available()) { // Kiểm tra có dữ liệu từ Serial
  //   char command = Serial.read(); // Đọc phím được nhấn
  //   if (command == '1') {
  //     servo();
  //   } 
  //   else if (command == '2') {
  //     tempmid();
  //     delay(3000);
  //   } 
  //   else if (command == '3'){
  //     twolaser();
  //   }
  //   else if (command == '4'){
  //     water_sensor();
  //   }
  //   else if (command == '5'){
  //     relay_water();
  //   }

  // }
  // delay(1000);  
  // digitalWrite(laser1, HIGH);
  float h = dht.readHumidity();
  float t = dht.readTemperature();
  float f = dht.readTemperature(true);

  Serial.print("Humidity: ");
  Serial.println(h);
  Serial.print("Temperature (C): ");
  Serial.println(t);
  Serial.print("Temperature (F): ");
  Serial.println(f);
  delay(1000);
  // Serial.println("hello");
  // delay(1000);
  // int value = digitalRead(pir_pin);
  // Serial.println(value);
  // delay(100);

  

}
