import React from 'react';
import blog1 from '../../../image/blog/blog1.jpg';
import blog2 from '../../../image/blog/blog2.jpg';
import blog3 from '../../../image/blog/blog3.jpg';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog container pt-5 my-5'>
            <div className="row">
                <h1 className='title'><b>FROM OUR BLOG</b></h1>
                <div className="blog-item col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src={blog1} alt="" />
                    <h5 className='pt-2'>DUIS AUTEM VEL EUM TEMPOR INVIDUNT UT LABORE </h5>
                    <p className='pt-2'>Our business is best business in the world. It is very beautiful manufacturer Website. We are the best in all services. We offer our best service anywhere in the world.</p>
                    <p className="pt-3">December 21th 2021</p>
                </div>

                <div className="blog-item col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src={blog2} alt="" />
                    <h5 className='pt-2'>DUIS AUTEM VEL EUM IRIURE DOLOR IN HENDRERIT</h5>
                    <p className='pt-2'>Our business is best business in the world. It is very beautiful manufacturer Website. We are the best in all services. We offer our best service anywhere in the world.</p>
                    <p className="pt-3">December 21th 2021</p>
                </div>

                <div className="blog-item col-lg-4 col-md-6 col-sm-12 mt-5">
                    <img src={blog3} alt="" />
                    <h5 className='pt-2'>KIRE TUMA FEUGIAT VERO EOS ET ACCUSAM ET JUSTO</h5>
                    <p className='pt-2'>Our business is best business in the world. It is very beautiful manufacturer Website. We are the best in all services. We offer our best service anywhere in the world.</p>
                    <p className="pt-3">December 21th 2021</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;