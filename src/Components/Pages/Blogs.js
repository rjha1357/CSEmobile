import React, { Component } from 'react';
import Header from '../Includes/Header';
import Footer from '../Includes/Footer';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { API_BASE_URL } from '../../Config/Config';
import moment from 'moment';

export default class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_blogCategory: [],
            cat1_blogs: [],
            cat2_blogs: [],
            cat3_blogs: []
        }
    }
    componentDidMount() {
        window.headerTabs();
        Axios.get(API_BASE_URL + "api/blog-category")
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    all_blogCategory: data
                });
            }).catch(err => console.log(err));

        Axios.post(API_BASE_URL + "api/get-blogs/" + 1)
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    cat1_blogs: data
                });
            }).catch(err => console.log(err));


        Axios.post(API_BASE_URL + "api/get-blogs/" + 2)
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    cat2_blogs: data
                });
            }).catch(err => console.log(err));

        Axios.post(API_BASE_URL + "api/get-blogs/" + 3)
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    cat3_blogs: data
                });
            }).catch(err => console.log(err));
    }
    // handleClick(id) {
    //     this.props.history.push({
    //         pathname: '/blog-inner',
    //         state: { blogid: id }
    //     })
    // }

    render() {
        return (
            <React.Fragment>
                <Header pagename="Blog" history={this.props.history} />
                <main className="wrapper">
                    <div className="secInner hideSkeleton">
                        <ul className="tabs headerTabs ">
                            <li key="key1" className="tab"><Link className="active tabLinks" to="#releases">Trading Card news</Link></li>
                            <li key="key2" className="tab"><Link className="tabLinks" to="#prospects">Investment Journal</Link></li>
                            <li key="key3" className="tab"><Link className="tabLinks" to="#valuecards">Sports World</Link></li>
                            {/* {this.state.all_blogCategory.map((blogCat) => {
                                return <li key= {"cat" + blogCat.id} className="tab">
                                    <Link className={ blogCat.id == 1 ? 'active tabLinks' : 'tabLinks' } to={"#" + blogCat.category_div}>{blogCat.name}</Link>
                                    </li>
                            })} */}
                        </ul>
                        <div id="releases">
                            <div className="secBlogcards mt-2">
                                <div className="container">
                                    {this.state.cat1_blogs.map((blogsCat1) => {
                                        return <Link key={blogsCat1.id} className="blogCards" to={{ pathname: '/blog-inner', state: { blogId: blogsCat1.id , catId:blogsCat1.blog_categories_id } }}>
                                            <div className="blogImg" key={blogsCat1.id}>
                                                <img src={API_BASE_URL + 'img/blogImg/' + blogsCat1.image_name} className="responsive-img" alt="" />
                                            </div>
                                            <div className="blogContent" key={"1" + blogsCat1.id}>
                                                <h6 className="mt-0 mb-0">{blogsCat1.title}</h6>
                                                <span>{moment(blogsCat1.created_at).format('DD MMMM YYYY')}</span>
                                                <p className="mt-1" dangerouslySetInnerHTML={{ __html: blogsCat1.content }}></p>
                                            </div>
                                        </Link>
                                    })}

                                </div>
                            </div>
                        </div>
                        <div id="prospects">
                            <div className="secBlogcards mt-2">
                                <div className="container">
                                    {this.state.cat2_blogs.map((blogsCat2) => {
                                        return <Link key={blogsCat2.id} className="blogCards" to={{ pathname: '/blog-inner', state: { blogId: blogsCat2.id , catId:blogsCat2.blog_categories_id } }}>
                                            <div className="blogImg" key={blogsCat2.id}>
                                                <img src={API_BASE_URL + 'img/blogImg/' + blogsCat2.image_name} className="responsive-img" alt="" />
                                            </div>
                                            <div className="blogContent" key={"2" + blogsCat2.id}>
                                                <h6 className="mt-0 mb-0">{blogsCat2.title}</h6>
                                                <span>{moment(blogsCat2.created_at).format('DD MMMM YYYY')}</span>
                                                <p className="mt-1" dangerouslySetInnerHTML={{ __html: blogsCat2.content }}></p>
                                            </div>
                                        </Link>
                                    })}

                                </div>
                            </div>
                        </div>
                        <div id="valuecards">
                            <div className="secBlogcards mt-2">
                                <div className="container">
                                    {this.state.cat3_blogs.map((blogsCat3) => {
                                        return <Link key={blogsCat3.id} className="blogCards" to={{ pathname: '/blog-inner', state: { blogId: blogsCat3.id, catId:blogsCat3.blog_categories_id  } }}>
                                            <div className="blogImg" key={blogsCat3.id}>
                                                <img src={API_BASE_URL + 'img/blogImg/' + blogsCat3.image_name} className="responsive-img" alt="" />
                                            </div>
                                            <div className="blogContent" key={"3" + blogsCat3.id}>
                                                <h6 className="mt-0 mb-0">{blogsCat3.title}</h6>
                                                <span>{moment(blogsCat3.created_at).format('DD MMMM YYYY')}</span>
                                                <p className="mt-1" dangerouslySetInnerHTML={{ __html: blogsCat3.content }}></p>
                                            </div>
                                        </Link>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </React.Fragment>
        );
    }
}
