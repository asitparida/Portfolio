export const ProgressBarCode = `
const updateProgress = () => {
    this.state.progress++;
    if (this.state.progress >= 100) {
        this.state.progress = 0;
        if (this.props.onComplete) {
            this.clearTimers();
            this.props.onComplete();
        }
    }
    if (this.updateProgressInterval) {
        requestAnimationFrame(() => {
            this.setState({
                progress: this.state.progress
            })
        });
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.timeout = setTimeout(updateProgress, currentTimer);
    }
};
`;
export const StartButtonCode = `
Animated.loop(Animated.sequence([
    Animated.timing(this.animatedValueForScaling, { toValue: 1, duration: 300, delay: 1000}),
    Animated.timing(this.animatedValueForScaling, { toValue: 0, duration: 300 }),
    Animated.timing(this.animatedValueForScaling, { toValue: 0.5, duration: 100 }),
    Animated.timing(this.animatedValueForScaling, { toValue: 0, duration: 300 }),
    Animated.timing(this.animatedValueForScaling, { toValue: 0.5, duration: 300 })
])).start();
const scaledAnimatedStyle = {
    transform:[
        {   scaleX: this.animatedValueForScaling.interpolate({ inputRange: [0, 1], outputRange: [0.80, 1.2], }) },
        { scaleY: this.animatedValueForScaling.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1.2] })}
    ]
};
return (
    <TouchableWithoutFeedback onPress={this._onPressButton.bind(this)}>
	    <Animated.View style={[styles.centralIconStyles, scaledAnimatedStyle]} >
		    <Icon color='#fff' size={36} name='keyboard-arrow-right' />
	    </Animated.View>
    </TouchableWithoutFeedback>
);
`;
export const ActionMenuCode = `
<TouchableWithoutFeedback onPress={this.onAction.bind(this, 'WORBLE_ACTIONS')} disabled={worbleActions.length === 0} >
    <View style={[{ alignItems: 'center' }, worbleActionDisabledStyle]}>
        <Image
            source={
                require('../assets/images/worble_icon.png')
            }
            style={styles.actionBoxImage} />
        <Text style={styles.actionBoxlabel}>Actions</Text>
    </View>
</TouchableWithoutFeedback>
<Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}>
    <TouchableWithoutFeedback onPress={() => {
        this.setModalVisible(!this.state.modalVisible);
    }}>
    ...
</Modal>
`;
