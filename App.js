import React from 'react';
import {Button, Text, View} from 'react-native';
import * as Permissions from 'expo-permissions';
import {LinearGradient} from 'expo-linear-gradient';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="expo-permissions"
        onPress={async () => {
          const status = await Permissions.askAsync(
            Permissions.USER_FACING_NOTIFICATIONS,
          );
          alert(JSON.stringify(status));
        }}
      />

      <LinearGradient
        colors={['pink', 'purple']}
        style={{
          padding: 15,
          marginTop: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}>
        <Text style={{color: '#fff'}}>expo-linear-gradient</Text>
      </LinearGradient>
    </View>
  );
};

export default App;
