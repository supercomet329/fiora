import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { immutableRenderDecorator } from 'react-immutable-render-mixin';

import Avatar from '@/components/Avatar';

@immutableRenderDecorator
class Message extends Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        nickname: PropTypes.string.isRequired,
        time: PropTypes.object.isRequired,
        type: PropTypes.oneOf(['text']),
        content: PropTypes.string.isRequired,
        isSelf: PropTypes.bool,
    }
    static defaultProps = {
        isSelf: false,
    }
    static formatTime(time) {
        return `${time.getHours()}:${time.getMinutes()}`;
    }
    componentDidMount() {
        this.dom.scrollIntoView();
    }
    render() {
        const {
            avatar, nickname, time, type, content, isSelf,
        } = this.props;
        return (
            <div className={`chat-message ${isSelf ? 'self' : ''} ${type}`} ref={i => this.dom = i}>
                <Avatar className="avatar" src={avatar} size={44} />
                <div className="right">
                    <div className="nickname-time">
                        <span className="nickname">{nickname}</span>
                        <span className="time">{Message.formatTime(time)}</span>
                    </div>
                    <div className="content">{content}</div>
                    <div className="arrow" />
                </div>
            </div>
        );
    }
}

export default Message;
