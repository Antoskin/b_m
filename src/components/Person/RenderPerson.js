import React, { PureComponent } from 'react';
import {For} from 'react-control-statements';

class RenderPerson extends React.PureComponent {

    render() {
        const {persons} = this.props;

        return (
            <For each="$item" of={ persons }>
                <div key="$item.id">$item.ava</div>
            </For>
        )
    }

}

export default RenderPerson;
