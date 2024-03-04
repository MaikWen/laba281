import React, { Component } from 'react';
import { View, Text } from 'react-native';
class LifecycleComponent extends Component {
 constructor(props) {
 super(props);
 console.log('Constructor');
 }
 componentDidMount() {
 console.log('Component Did Mount');
 }
 componentDidUpdate() {
 console.log('Component Did Update');
 }
 componentWillUnmount() {
 console.log('Component Will Unmount');
 }
 render() {
 console.log('Render');
 return (
 <View>
 <Text>Component Lifecycle</Text>
 </View>
 );
 }
}
export default LifecycleComponent;