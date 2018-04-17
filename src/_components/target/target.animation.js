// import { Animated, Easing } from 'react-native';

// export const opacityValue = new Animated.Value(0);
// export const scaleValue = new Animated.Value(0);

// export function fadeIntoTarget() {
//     this.scaleValue.setValue(0)
//     this.opacityValue.setValue(0)
//     Animated.parallel([
//         Animated.timing(this.scaleValue, {
//             toValue: 1,
//             duration: 300
//         }),
//         Animated.timing(this.opacityValue, {
//             toValue: 1,
//             duration: 300
//         })
//     ]).start()
// }

// export function fadeOut() {
//     const { dispatch } = this.props;

//     Animated.timing(this.opacityValue, {
//         toValue: 0,
//         duration: 200
//     }).start(() => {
//         dispatch(targetActions.closeTarget())
//     })
// }
