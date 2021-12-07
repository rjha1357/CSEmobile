import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Header from '../Includes/Header';
import { API_BASE_URL } from '../../Config/Config';
import moment from 'moment';

export default class BlogInner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogDetails: {},
            blogsbyCatId: []
        }
    }


    componentDidMount() {
        const { blogId, catId } = this.props.location.state;
        this.getBlogDetails(blogId);
        this.getMoreRelatedBlogs(catId);
    }

    getBlogDetails(blogId) {
        Axios.post(API_BASE_URL + "api/blog-details-by-blogId/" + blogId)
            .then(({ data }) => {
                this.setState({
                    blogDetails: data
                });
            }).catch(err => console.log(err));
    }

    getMoreRelatedBlogs(catId) {
        Axios.post(API_BASE_URL + "api/more-related-blogs/" + catId)
            .then(({ data }) => {
                //console.log(data);
                this.setState({
                    blogsbyCatId: data
                });
            }).catch(err => console.log(err));
    }

    render() {
        return (
            <React.Fragment>
                <Header pagename="Blog Inner" history={this.props.history} />
                <main className="wrapper">
                    <div className="secInner hideSkeleton">
                        <div className="secBlogDetails">
                            <img src={API_BASE_URL + 'img/blogImg/' + this.state.blogDetails.image_name} className="responsive-img" alt="" />
                            <div className="container">
                                <h6>{this.state.blogDetails.title}</h6>
                                <span>{moment(this.state.blogDetails.created_at).format('DD MMMM YYYY')}</span>
                                <p dangerouslySetInnerHTML={{ __html: this.state.blogDetails.content }}></p>
                            </div>
                        </div>
                        <div className="secBlogcards pt-0 mt-2">
                            <div className="container">
                                <div className="cardBoxHeader mb-3">
                                    <h5>Related Articles</h5>
                                    <Link to="/blogs">View All Posts</Link>
                                </div>
                                {this.state.blogsbyCatId.map((relatedBlogs) => {
                                    return <button key={"1" + relatedBlogs.blogId} className="blogCards" onClick={() => {
                                        this.getBlogDetails(relatedBlogs.blogId);
                                        this.getMoreRelatedBlogs(relatedBlogs.id)
                                    }}>
                                        <div className="blogImg" key={"1" + relatedBlogs.author_name}>
                                            <img src={API_BASE_URL + 'img/blogImg/' + relatedBlogs.image_name} className="responsive-img" alt="" />
                                        </div>
                                        <div className="blogContent" key={"1" + relatedBlogs.id}>
                                            <h6 className="mt-0 mb-0">{relatedBlogs.title}</h6>
                                            <span>{moment(relatedBlogs.created_at).format('DD MMMM YYYY')}</span>
                                            <p className="mt-1" dangerouslySetInnerHTML={{ __html: relatedBlogs.content }}></p>
                                        </div>
                                    </button>
                                })}
                            </div>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
