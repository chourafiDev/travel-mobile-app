import React, { useCallback, useMemo } from "react";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import Steps from "../stepper/Steps/Steps";
import StepForm from "../stepper/StepForms/StepForm";
import { clearStepperValues } from "../../store/features/stepperSlice";

const AddDestination = ({ sheetRef, handleSnapPressCloseAdd }) => {
  const { colorScheme } = useColorScheme();
  const dispatch = useDispatch();

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

  // Initialize the current step value and clear the stored stepper values
  const handleDismiss = () => {
    dispatch(clearStepperValues());
  };

  return (
    <BottomSheetModal
      ref={sheetRef}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      backgroundStyle={{
        backgroundColor: colorScheme == "light" ? "#FBFBFB" : "#222B45",
      }}
      onDismiss={handleDismiss}
    >
      <BottomSheetView>
        <View className="px-4 h-full pb-6">
          {/* Stepper status */}
          <Steps />

          {/* Stepper forms */}
          <StepForm type="add" handleSnapPressClose={handleSnapPressCloseAdd} />
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default AddDestination;
