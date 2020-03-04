import React from 'react';
import Container from '@/screen/Container';
import '@/assets/style/level2_style.less';
import { Accordion, List } from 'antd-mobile';
import { Link } from 'react-router-dom';

class Html_view extends React.Component {
    constructor() {
        super()
        this.state = {
            LabelData: [
                {title: 'webpack基本介绍', path: '/Webpack_basic'},
                {title: '深入浅出webpack', path: '/Webpack_induction'},
                {title: 'webpack最佳实践',  path: '/Webpack_practice'},
                {title: 'header',  path: ''},
                {title: 'footer',  path: ''},
                {title: 'aside',  path: ''},
                {title: 'main',  path: ''},
                {title: 'audio',  path: ''},
                {title: 'video',  path: ''}
            ],
            inputData: [
                {title: 'color'},
                {title: 'date'},
                {title: 'email'},
                {title: 'month'},
                {title: 'number'},
                {title: 'tel'}
            ]
        }
    }

    render() {
        return (
            <Container>
                <div className="level2">
                    <div className="_desc">
                        <h2>HTML5</h2>
                        <p>HTML5 是 HTML 标准的最新演进版本。 这个术语代表了两个不同的概念：</p>
                        <p>它是一个新的 HTML 语言版本包含了新的元素，属性和行为，同时包含了一系列可以被用来让 Web 站点和应用更加多样化，功能更强大的技术。 这套技术往往被称作 HTML5 和它的朋友们，通常简称为 HTML5。</p>
                        <p>从要对全部所有的 Web 开发人员有用这一点出发，这个参考页面链接了有关 HTML5 技术的大量资源，并且基于它们各自的功能，把它们归类成了若干组。</p>
                    </div>
                    <main>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="HTML5 新标签">
                                    <List className="my-list">
                                        {this.state.LabelData.map((item, index) => {
                                            return (
                                                <Link to={item.path} key={index}>
                                                    <List.Item>{item.title}</List.Item>
                                                </Link>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                        <div>
                            <Accordion defaultActiveKey="0" className="my-accordion">
                                <Accordion.Panel header="input 新属性">
                                    <List className="my-list">
                                        {this.state.inputData.map((item, index) => {
                                            return (
                                                <List.Item key={index}>{item.title}</List.Item>
                                            )
                                        })}
                                    </List>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </main>
                </div>
            </Container>
        )
    }
}

export default Html_view;