import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Review from "./Review";
import { shadow } from "../../../utils/theme";
import { useColorScheme } from "nativewind";
import AddReview from "./AddReview";
import { useGetReviewsQuery } from "../../store/services/ReviewsApiSlice";
import Loading from "../Loading";
import Empty from "../Empty";

const Reviews = ({ destinationId }) => {
  const { colorScheme } = useColorScheme();

  // Open/Close modal bottom
  const sheetRef = useRef(null);

  const handleOpenSnapPress = () => {
    sheetRef.current?.present();
  };
  const handleCloseSnapPress = () => {
    sheetRef.current?.close();
  };

  // fetch reviews
  const { data: reviews, isLoading } = useGetReviewsQuery(destinationId);

  return (
    <View className="bg-[#f8f8fa] dark:bg-dark h-full">
      <View className="flex-row justify-between items-center mb-4 px-4">
        <Text
          className="text-dark/70 dark:text-white/70 text-base"
          style={{ fontFamily: "baiJamjuree-medium" }}
        >
          10 Reviews are found
        </Text>
        <TouchableOpacity
          className="border border-brand dark:bg-dark-2/60 rounded-2xl px-3 py-2 bg-white dark:bg-dark-2 overflow-hidden"
          style={[colorScheme == "light" && shadow.boxShadow]}
          activeOpacity={0.8}
          onPress={handleOpenSnapPress}
        >
          <Text
            className="text-brand text-base"
            style={{ fontFamily: "baiJamjuree-bold" }}
          >
            Add Review
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={reviews}
          renderItem={({ item }) => {
            return <Review key={item.id} review={item} />;
          }}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1 }}
          ListEmptyComponent={<Empty />}
          ListFooterComponent={<View className="h-16"></View>}
          ItemSeparatorComponent={<View className="h-3"></View>}
        />
      )}

      <AddReview
        sheetRef={sheetRef}
        handleCloseSnapPress={handleCloseSnapPress}
        destinationId={destinationId}
      />
    </View>
  );
};

export default Reviews;
