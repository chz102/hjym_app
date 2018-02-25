import {
    StackNavigator,
    TabBarBottom,
} from 'react-navigation';
import Design from "../design/Design";
import DesignerDetail from '../design/DesignerDetail';

const DesignNavigation = StackNavigator({
        Design: {
            screen: Design,
            navigationOptions: {
                header: null
            },
        },
        details: {
            screen: DesignerDetail
        },
    }
);
export default DesignNavigation;