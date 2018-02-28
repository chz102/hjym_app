import React, {
    Component
} from 'react';
import Resolution from "./common/Resolution";


export default class BasePureComponent extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.state.params.title,
            tabBarVisible: false,
            headerStyle: {
                height: SCALE(76), padding: SCALE(10),
                backgroundColor: "#812325",
            },
        }
    }

    logMsg(){

    }
    logMsgWithKey(){

    }
}