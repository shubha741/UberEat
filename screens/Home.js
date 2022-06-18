import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Catogaries from "../components/Catogaries";
import RestorauntItem from "../components/RestorauntItem";
import { localData } from "../components/RestorauntItem";

// const YELP_KEY =
//   "vhItaCHJA1RZpC3xsZ1b15j8Oa315upfyD3uWNuwaMG1Rr1vwdvNZYYp3wWbNAG-5QOzOLj0IZpD9zcK-zIaYP8Kqr_BTTy1126orIZ144PXgTPdulhFnJXGjAGiYnYx";

export default function Home() {
  const [restorauntData, setRestorauntData] = useState(localData);

  const getRestarauntData = () => {
    const yelpUrl =
      "https://api.yelp.com/v3/businesses/search?term=restaurants&location=sanDiego";
    const YELP_API_KEY =
      "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestorauntData(json.businesses))

  };

  useEffect(() => {
    // getRestarauntData();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#d9d9d7" }}>
      <View style={{ padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Catogaries />
        <RestorauntItem restorauntData={restorauntData} />
      </ScrollView>
    </SafeAreaView>
  );
}
