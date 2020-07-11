import React from 'react';
import '../../Home/node_modules/@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import { BlogPostTemplate } from './BlogPostTemplate';
import { HTMLContent } from '../../common/Content';

const post = {
    html: '<p></p>',
    frontmatter: {
        description: 'Test description',
        tags: ['testtag1', 'testtag2'],
        title: 'Test Title',
        featuredimage: 'test'
    }
};

it('Should render blog post', () => {
    render(
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
            featuredimage={post.frontmatter.featuredimage}
        />
    );

    expect(screen.getByTestId('title')).toHaveTextContent(
        post.frontmatter.title
    );
});
