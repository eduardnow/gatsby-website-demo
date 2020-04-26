import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => (
    <Layout>
        <h1>This is the about page</h1>

        <div>
            <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        </div>

        <p>Non Lorem enim sint nisi anim ad qui consectetur nisi nulla sit.</p>
    </Layout>
)
