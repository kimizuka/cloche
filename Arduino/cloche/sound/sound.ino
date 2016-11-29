#include <SPI.h>
#include <SdFat.h>
#include <SdFatUtil.h> 
#include <SFEMP3Shield.h>

#define PIN_IN A0
#define PIN_OUT 10

SdFat sd;
SFEMP3Shield MP3player;

int index = 1;
int state = 0;

void setup() {
  Serial.begin(9600);
  pinMode(PIN_IN, INPUT_PULLUP);
  pinMode(PIN_OUT, OUTPUT);

  sd.begin(SD_SEL, SPI_HALF_SPEED);
  MP3player.begin();
}
 
//do something else now
void loop() {
  state = digitalRead(PIN_IN);

//  Serial.println(state);

  if (!state) {
    MP3player.playTrack(index);
    digitalWrite(PIN_OUT, HIGH);
  } else {
    MP3player.stopTrack();
  }

  if (!state && !MP3player.isPlaying()) {
    MP3player.playTrack(index);
  }

  delay(100);
}
