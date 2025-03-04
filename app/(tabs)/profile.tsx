// import { View, Text, Button } from "react-native";
// import React from "react";
// import { useAuth } from "@clerk/clerk-expo";
// import { Link } from "expo-router";

// const Profile = () => {
//   const { signOut, isSignedIn } = useAuth();

//   return (
//     <View>
//       <Button title="Log out" onPress={() => signOut()} />
//       {!isSignedIn && (
//         <Link href={"/(modals)/login"}>
//           <Text>Login</Text>
//         </Link>
//       )}
//     </View>
//   );
// };

// export default Profile;

// the top is for the login

import { View, Text } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View>
      <Text>profile</Text>
    </View>
  );
};

export default profile;
