import React, { Component } from 'react'
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native'
import { CardSection } from './common'
import { connect } from 'react-redux'
import  * as actions from '../actions'

class ListItem extends Component {
    UNSAFE_componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {library, expanded } = this.props
        const {description} = library.item
        if(expanded) {
            return(
                <CardSection>
                    <Text>{description}</Text>
                </CardSection>
            )
        }
    }

    render() {
        const { titleStyle } = styles
        const { title, id } = this.props.library.item

        return (
            <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                        {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectLibraryId === ownProps.library.item.id
    return { expanded }
    // return { selectLibraryId: state.selectLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem)