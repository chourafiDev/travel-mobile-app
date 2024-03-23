import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useState } from "react";
import { View, Text, Image, ImageBackground, Platform } from "react-native";
import GradientButton from "../ui/GradientButton";
import { useColorScheme } from "nativewind";
import Animated, { FadeInDown } from "react-native-reanimated";
import { bgPattern, whiteLogo } from "../../../utils/assets";
import * as Print from "expo-print";

const BookingTicket = ({ sheetRefTicket, booking }) => {
  const { colorScheme } = useColorScheme();
  const snapPoints = useMemo(() => ["80%"], []);

  const renderBackdrop = useCallback((props) => {
    return (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  // handle download ticket as a PDF
  const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    </head>

    <style>
    @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Jost:ital,wght@0,100..900;1,100..900&display=swap')
    

    body {
      background-color: #ffffff;
      height: 100%;
      width: 100%;
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
    }
    .container{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    .bg-ticket {
      position: relative;
      background-image: url('https://res.cloudinary.com/abdelmonaime/image/upload/v1708700367/travel/bg-pattern_mma8vq.png');  
      background-size: cover;
      background-repeat: no-repeat;
      margin: 0;
      height: 800px;
      width: 500px;
    }
    .top {
      height: 600px; 
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .bottom{
      height: 200px; 
      border-top-width: 2px;
      border-top-color: white;
      border-top-style: dashed;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .circles{
      position: absolute;
      height: min-content; 
      bottom: 160px;
      width: 570px;
      transform: translateX(-32px);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .circle {
      width: 5rem; 
      height: 5rem;
      border-radius: 50%; 
      background-color: white; 
    }
    .small-circles {
      position: absolute;
      right: 20px;
      width: 460px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .small-circle{
      width: 2rem; 
      height: 2rem; 
      border-radius: 50%; 
      background-color: white; 
    }
    .top .small-circles {
      top: -16px;
    }
    .bottom .small-circles {
      bottom: -16px;
    }
    .number-card {
      background-color: transparent; 
      border: 1px solid rgba(255, 255, 255, 0.8); 
      border-radius: 0.375rem; 
      margin-top: auto; 
      margin-bottom: auto; 
      width: 400px; 
      height: 100px;
      margin-left: auto; 
      margin-right: auto;
      display: flex;
      justify-content: center; 
      align-items: center;
    }
    .number {
      color: white;
      font-size: 3rem;
      text-align: center;
      font-family: "baiJamjuree-semibold";
      font-weight: 600
    }
    .content-card {
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 0.375rem; 
      width: 400px; 
    }
    .content-body {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      width: 400px;
      margin-top: -60px;
    }
    .price {
      border-top: 1px solid rgba(255, 255, 255, 0.4);
      text-align: center; 
      margin-bottom: -50px;
      padding-bottom: 25px;
    }
    </style>


    <body>
    <div class="container">
     <div class="bg-ticket">
        <div class="top">
          <div class="small-circles">
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
          </div>

          <div>
            <div style="margin-bottom: 30px; text-align: center"> 
              <img
                src="https://res.cloudinary.com/abdelmonaime/image/upload/v1708700421/travel/white-logo_vvgjto.png"
                style="width: 130px; height: 160px; background-size: fill" />
            </div>

            <div class="content-card">
              <p style="color: #ffffff; font-size: 2.9rem; text-align: center; font-weight: 500; margin-top: 20px">${
                booking.destination.title
              }</p>

              <div class="content-body">
                <div> 
                  <p style="color: rgba(255, 255, 255, 0.8); font-size: 2rem; margin-bottom: -30px; font-weight: 300;">To:</p>  
                  <p style="color: #ffffff; font-size: 2.8rem; font-weight: 500">${
                    booking.destination.destination
                  }</p>
                </div>
                <div> 
                  <p style="color: rgba(255, 255, 255, 0.8); font-size: 2rem; margin-bottom: -30px; font-weight: 300">Duration</p>  
                  <p style="color: #ffffff; font-size: 2.8rem; font-weight: 500">${
                    booking.destination.duration
                  } ${booking.destination.duration > 1 ? "Days" : "Day"}</p>
                </div>
              </div>


              <div class="price">
                <p style="color: rgba(255, 255, 255, 0.8); font-size: 2rem; margin-bottom: -30px; margin-top: 25px; font-weight: 300">Total price</p>  
                <p style="color: #ffffff; font-size: 2.8rem; font-weight: 500">$${
                  booking.destination.price
                }</p>
              </div>
            </div>
          
          </div>
        </div>


        <div class="bottom">
          <div class="small-circles">
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
            <div class="small-circle"></div>
          </div>

          <div class="number-card">
            <p class="number">NO . ${booking.number}</p>
          </div>

        </div>
       

        <div class="circles">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
     </div>
    </body>
  </html>
  `;

  const [selectedPrinter, setSelectedPrinter] = useState();

  const printTicket = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  return (
    <BottomSheetModal
      ref={sheetRefTicket}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
    >
      {/* [#f8f8fa] */}
      <View className="justify-between h-full pb-4">
        <Animated.View
          entering={FadeInDown.delay(40)}
          className="bg-white dark:bg-dark justify-center items-center flex-1"
        >
          <ImageBackground source={bgPattern}>
            <View className="bg-brand/20 w-[250px] h-[450px] relative">
              {/* Top */}
              <View className="w-full h-[330px]">
                <View className="absolute right-2 -top-2 w-[233px] flex-row items-center justify-between">
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                </View>

                <View className="justify-center items-center h-full">
                  <Image
                    source={whiteLogo}
                    className="w-20 h-20"
                    resizeMode="contain"
                  />

                  <View className="mt-4 border border-white/60 rounded-md py-2">
                    <Text
                      className={`text-white text-center ${
                        booking.destination.title.length > 14
                          ? "text-base"
                          : "text-2xl"
                      }`}
                      style={{ fontFamily: "baiJamjuree-semibold" }}
                    >
                      {booking.destination.title}
                    </Text>

                    <View className="flex-row justify-around items-center w-48 px-1 mt-4">
                      <View>
                        <Text
                          className="text-white/80 text-base"
                          style={{ fontFamily: "baiJamjuree-medium" }}
                        >
                          To:
                        </Text>
                        <Text
                          className="text-white text-xl"
                          style={{ fontFamily: "baiJamjuree-semibold" }}
                        >
                          {booking.destination.destination}
                        </Text>
                      </View>
                      <View>
                        <Text
                          className="text-white/80 text-base text"
                          style={{ fontFamily: "baiJamjuree-medium" }}
                        >
                          Duration:
                        </Text>
                        <Text
                          className="text-white text-xl text"
                          style={{ fontFamily: "baiJamjuree-semibold" }}
                        >
                          {booking.destination.duration}{" "}
                          {booking.destination.duration > 1 ? "Days" : "Day"}
                        </Text>
                      </View>
                    </View>

                    <View className="border-t border-white/60 pt-3 mt-6">
                      <Text
                        className="text-white/80 text-base text-center"
                        style={{ fontFamily: "baiJamjuree-medium" }}
                      >
                        Total price
                      </Text>
                      <Text
                        className="text-white text-2xl text-center"
                        style={{ fontFamily: "baiJamjuree-semibold" }}
                      >
                        ${booking.destination.price}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Bottom */}
              <View className="w-full h-[100px] flex-1 border-t-2 border-white border-dashed">
                <View className="absolute right-2 -bottom-2 w-[233px] flex-row items-center justify-between">
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                  <View className="w-4 h-4 rounded-full bg-white dark:bg-dark"></View>
                </View>

                <View className="bg-transparent border border-white/60 rounded-md my-auto w-48 h-16 mx-auto justify-center items-center">
                  <Text
                    className="text-white text-[26px] text-center"
                    style={{ fontFamily: "baiJamjuree-semibold" }}
                  >
                    NO . {booking.number}
                  </Text>
                </View>
              </View>

              {/* 2 circles */}
              <View className="absolute min-h-min bottom-[100px] w-[280px] -translate-x-[15px] flex-row justify-between items-center">
                <View className="w-9 h-9 rounded-full bg-white dark:bg-dark"></View>
                <View className="w-9 h-9 rounded-full bg-white dark:bg-dark"></View>
              </View>
            </View>
          </ImageBackground>
        </Animated.View>

        <View className="mt-3 px-4">
          <GradientButton
            label="Download Ticket"
            icon="download"
            type="primary"
            size="lg"
            onPress={printTicket}
          />
        </View>

        {Platform.OS === "ios" && (
          <>
            <View />
            <Button title="Select printer" onPress={selectPrinter} />
            <View />
            {selectedPrinter ? (
              <Text>{`Selected printer: ${selectedPrinter.name}`}</Text>
            ) : undefined}
          </>
        )}
      </View>
    </BottomSheetModal>
  );
};

export default BookingTicket;
