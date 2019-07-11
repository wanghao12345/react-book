import styled from 'styled-components'

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
        border-radius: 5px;
    }
`;
export const HomeRight = styled.div`
    width: 240px;
    float: right;
    padding-top: 30px;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
`;
export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        width: 32px;
        height: 32px;
        float: left;
        background: red;
        margin-right: 10px;
    }
`;

