import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import spinner from '../images/spinner.gif';

const Articles = ({ posts }) => {
  return (
    <MainContainer>
      {!posts.length ? (
        <img src={spinner} alt='loading...' />
      ) : (
        posts.map((article, key) => (
          <div className='container' key={key}>
            <h2>{article.title}</h2>
            <p>{article.article}</p>
            <span className='badge badge-secondary p-2'>
              {article.authorname}
            </span>
            <div className='row my-5'>
              <div className='col-sm-2'>
                <Link to='/edit-article' className='btn btn-outline-success'>
                  Edit Article
                </Link>
              </div>
              <div className='col-sm-2'>
                <button to='/' className='btn btn-outline-danger'>
                  Delete Article
                </button>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </MainContainer>
  );
};

export default Articles;

const MainContainer = styled.div`
  margin: 7rem 0;

  img {
    width: 15rem;
    display: block;
    margin: 0 auto;
  }
`;
