import React from 'react';
import { Popconfirm, Button } from 'antd';

export default function PopconfirmButton(props) {
  const {
    // 气泡框位置topLeft、top、topRight、leftTop、left、leftBottom、rightTop、right、rightBottom、bottomLeft、bottom、bottomRight
    placement,
    popconfirmTitle, // 确认框的描述
    onConfirm,
    onCancel,
    okText, // 确认按钮
    cancelText, // 取消按钮
    buttonType, // 按钮类型 primary dashed danger link
    buttonTips, // 按钮名称
    buttonStyle, // 按钮样式
    okType, // 确认按钮类型 primary dashed danger link
    iconType, // 自定义icon图标
  } = props;

  return (
    <Popconfirm
      placement={placement || 'topRight'}
      title={popconfirmTitle}
      onConfirm={onConfirm}
      okText={okText || '确定'}
      cancelText={cancelText || '取消'}
      okType={okType}
      icon={iconType}
      onCancel={onCancel}
    >
      <Button type={buttonType} style={buttonStyle}>
        {buttonTips}
      </Button>
    </Popconfirm>
  );
}
