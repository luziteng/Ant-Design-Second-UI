import React, { PureComponent } from 'react';
import { Card, Table, Divider, Tag, Icon } from 'antd';
import TooptipImg from '@/components/TooltipImg';
import PopconfirmButton from '@/components/PopconfirmButton';

class FirsePage extends PureComponent {
  deleteProduct = key => {
    console.log(key);
  };

  buttonCancel = () => {
    console.log('真无聊');
  };

  render() {
    const columns = [
      {
        title: 'Picture',
        dataIndex: 'picture',
        key: 'picture',
        render: text => (
          <TooptipImg
            placement="right"
            trigger="hover"
            contentImgStyle={{
              maxHeight: 350,
              maxWidth: 350,
            }}
            url={text}
            imgStyle={{ maxHeight: 100, maxWidth: 132, marginRight: '5px' }}
            alts="头像"
          />
        ),
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <PopconfirmButton
              onConfirm={() => {
                this.deleteProduct(record.key);
              }}
              buttonTips="delete"
              popconfirmTitle="你确定要将该人员去除吗？"
              buttonType="link"
              okText="ok"
              cancelText="cancel"
              // okType="dashed"
              iconType={<Icon type="question-circle-o" style={{ color: 'red' }} />}
              onCancel={this.buttonCancel}
            />
          </span>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        picture: 'http://img3.imgtn.bdimg.com/it/u=3414414030,1436910499&fm=11&gp=0.jpg',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        picture: 'http://pic4.zhimg.com/50/v2-46c2eb18d011d3711617a2664844e5fd_hd.jpg',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        picture:
          'http://www.banyingle.com/shop/images_shop/24622/2012-01-12/69872012112106083970703.jpg',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];

    return (
      <Card>
        <Table columns={columns} dataSource={data} />
      </Card>
    );
  }
}

export default FirsePage;
