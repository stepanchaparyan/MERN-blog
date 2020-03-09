import React from 'react';
import styled from 'styled-components';

const Articles = ({ posts }) => {
  return (
    <MainContainer>
      Articles component
      {posts.map((article, key) => (
        <div className='container' key={key}>
          <h2>{article.title}</h2>
          <p>{article.article}</p>
          <span className='badge badge-secondary p-2'>
            {article.authorname}
          </span>
          <div className='row my-5'>
            <div className='col-sm-2'>
              <a href='' className='btn btn-outline-success'>
                Edit Article
              </a>
            </div>
            <div className='col-sm-2'>
              <a href='' className='btn btn-outline-danger'>
                Delete Article
              </a>
            </div>
          </div>
        </div>
      ))}
    </MainContainer>
  );
};

export default Articles;

const MainContainer = styled.div`
  margin: 7rem 0;
`;
