import React, { useContext } from 'react';
import {For} from 'react-control-statements';
import Like from '../Like';
import {LogContext} from '../../AuthentiController';
import RemovePerson from './RemovePerson';
import { Col, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;


function RenderPerson(props) {
    const user = useContext(LogContext);
    const {persons} = props;

    return (
        persons.map((i, id) => (
            <Col className="gutter-row" key={id} span={6}>
                <Card
                    style={{width: 300}}
                    cover={ // if options
                        <img
                            alt="example"
                            src={i.ava}
                        />
                    }
                    actions={[
                        <a target="_blank" href={i.wiki}>wiki</a>,
                        <Like/>,
                        <Icon type="ellipsis"/>,
                        <RemovePerson id={i.id} />
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={i.ava}/>}
                        title={i.name}
                        description="This is the description"
                    />
                </Card>,
            </Col>
        ))
    )

}

export default RenderPerson;
