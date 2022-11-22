import React, { useState } from 'react'
import { styled } from '@mui/system';
import Header from '../component/Header';

const HomeArea = styled('div')({
    backgroundColor: "#212529",
    height: "90vh",
    display: "flex",
});

const MyActivity = styled('div')({
    width: "50%",
    height: "100%",
    paddingLeft: "30px"
});

const FlagContents = styled('ul')({
    display: "flex",
    listStyle:"none",
    width: "100%",
    marginBottom: "2px",
});

const FlagContent = styled('li')({
    display: "flex",
    justifyContent: "center",
    width: "25%",
    padding: "1px",
});

const BookImgBox = styled('div')({
    height: "45%",
});

const GrassArea = styled('div')({
    width: "95%",
    height: "25%",
    marginTop: "10px",
    backgroundColor: "black",
    display: 'flex'
});

const GrassBox = styled('div')({
    width: "33.3%",
    margin: "5px",
    backgroundColor: "white"
});

const FeedArea = styled('div')({
    width: "30%",
});

const FeedBox = styled('div')({
    width: "90%",
    height: "60%",
    marginTop: "30px",
});

const FeedItem = styled('div')({
    backgroundColor: "white",
    margin: "10px",
    height: "30%",
    borderRadius: "30px"
});

const NoticeArea = styled('div')({
    display: "flex",
    height: "20%",
    width: "90%",
});

const NoticeBox = styled('div')({
    width: "50%",
    margin: "10px",
});

const UserBox = styled('div')({
    width: "50%",
    margin: "10px",
});

const SideArea = styled('div')({
    width: "20%",
    height: "100%",
});

const ButtonArea = styled('div')({
    display: "flex",
    alignItems: 'center',
    justifyContent: "flex-end",
    height: "11%",
});

const ButtonItem = styled('div')({
    width: "12%",
    height: "40%", 
    margin: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "20px",
    borderRadius: "12px"
});

const SideBar = styled('div')({
    backgroundColor: "#868e96",
    height: "89%",
    width: "100%",
});



const Home = () => {
    const contents = [
        {title: "STUDY", content: ["ALGORITHM", "WEB-BACKEND"]}, 
        {title: "PROJECT", content: ["FLAG-게시판"]}
    ];
    
    const buttonItem = [
        {name: "CH", bgColor: "#5c940d", fontColor: "white"}, 
        {name: "N" , bgColor: "#f8f9fa", fontColor: "black"},
        {name: "G", bgColor: "#9775fa", fontColor: "white"},
    ];
        return (
        <>
            <Header/>
            <HomeArea>
                <MyActivity>
                    <h3 style={{color: "white", paddingTop: "30px", margin: 0}}>MY ACTIBITY</h3>
                    <FlagContents>
                        {contents.map((item)=>(<FlagContent key={item.title}><h4 style={{color: "white"}}>{item.title}</h4></FlagContent>))}
                    </FlagContents>
                    <BookImgBox>
                        <img src="img/home-book.jpg" alt="blog-logo" style={{width: "95%",height: "100%"}}/>
                    </BookImgBox>
                    <h3 style={{color: "white", paddingTop: "30px", margin: 0}}>STUDY_WEB-BACKEND</h3>
                    <GrassArea>
                        <GrassBox/>
                        <GrassBox/>
                        <GrassBox/>
                    </GrassArea>
                </MyActivity>
                <FeedArea>
                    <h3 style={{color: "white", paddingTop: "30px", margin: 0}}>FEED</h3>
                    <FeedBox>
                        <FeedItem/>
                        <FeedItem/>
                        <FeedItem/>
                    </FeedBox>
                    <NoticeArea>
                        <NoticeBox>
                            <h4 style={{color: "white", margin: 0, paddingBottom: "5px"}}>#NOTICE</h4>
                            <p style={{color: "white"}}>할말은 없지만 공지입니다.</p>
                        </NoticeBox>
                        <UserBox>
                            <h4 style={{color: "white", margin: 0, paddingBottom: "5px"}}>USER</h4>
                            <p style={{color: "white"}}>강지은, 김준표, 문희조, 이수빈, 어준혁, 임소미, 한지석</p>
                        </UserBox>
                    </NoticeArea>
                </FeedArea>
                <SideArea>
                    <ButtonArea>
                        {buttonItem.map((item)=>(<ButtonItem key={item.name} style={{color: `${item.fontColor}`, backgroundColor: `${item.bgColor}` }}>{item.name}</ButtonItem>))}
                    </ButtonArea>
                    <SideBar></SideBar>
                </SideArea>
            </HomeArea>
        </>
    )
}

export default Home;
