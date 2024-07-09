import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import './../styles/Blogs.css';
import './../styles/EditBlog.css';
import { Link } from 'react-router-dom';

function Blogs() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('/api/blogs')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.error('Error fetching blogs:', error);
            });
    }, []);


    return (
        <div className="container mx-auto pt-20 pb-24 px-4">
            {blogs.length > 0 && (
                <div className="mb-8">
                    <div className="bg-white shadow overflow-hidden rounded-lg p-6 flex flex-col md:flex-row">
                        <Link to={`/blog/${blogs[0].id}`} className="md:w-1/2">
                            <img src={`https://placehold.co/600x400`} alt="Featured Blog Post" className="h-auto rounded"/>
                        </Link>
                        <div className="mt-4 md:mt-0 md:ml-4 md:w-1/2">
                            <div>
                                <Link to={`/blog/${blogs[0].id}`} className="text-2xl font-bold hover:text-blue-500">{blogs[0].title}</Link>
                                <p className="text-gray-700">{blogs[0].content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.slice(1).map(blog => (
                    <li key={blog.id} className="bg-white shadow overflow-hidden rounded-lg p-4">
                        <Link to={`/blog/${blog.id}`} className="block hover:text-blue-500">
                            <img src={`https://placehold.co/600x400`} alt="Blog Post" className="w-full h-auto rounded mb-2"/>
                            <h3 className="text-lg font-bold">{blog.title}</h3>
                            <p className="text-sm text-gray-700">{blog.content}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    );
}

export default Blogs;