import React from 'react';
import { styled } from '@mui/system';
import SideBar from '../component/SideBar';
import Button from '@mui/material/Button';
import { Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BoardArea = styled('div')({
  height: "82vh",
});

const TitleArea = styled('div')({
  height: "10%",
  display: "flex",
  paddingLeft: "15%",
  alignItems: "center",
});

const TitleBox = styled('h2')({
  fontWeight: "700",
  height: "100%",
  fontSize: "35px",
  display: "flex",
  alignItems: "center",
});

const ContentArea = styled('div')({
  width: "100%",
  height: "90%",
  display: "flex",
});

const ListArea = styled('div')({
  width: "87%",
  height: "100%",
});

const ListBar = styled('div')({
  height: "10%",
  backgroundColor: "black",
});

const BarItemBox = styled('ul')({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "flex-end",
});

const BarItem = styled('li')({
  width: "10%",
  height: "100%",
  color: "white",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  paddingBottom: "10px",
  fontSize: "12px",
  fontWeight: "600",
  "&:nth-of-type(1)": {marginLeft: "10px", paddingLeft: "6%", width: "30%"},
  "&:nth-of-type(5)": {paddingRight: "24%"},
});

const ListBox = styled('div')({
  height: "70%",
});

const ListThem = styled('div')({
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  height: "12.5%",
  "&:nth-of-type(1)": {color: "red"},
  "&:nth-of-type(odd)": {backgroundColor: "#313131"},
});

const ItemBox = styled('div')({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ListItem = styled('div')({
  width: "10%",
  height: "100%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  fontSize: "12px",
  fontWeight: "600",
  "&:nth-of-type(1)": {width: "6%", height: "50%", backgroundColor: "white", borderRadius: "15px", color: "red", marginLeft: "10px"},
  "&:nth-of-type(2)": {width: "30%"},
  "&:nth-of-type(6)": {paddingRight: "24%"},
});



const PaginationArea = styled('div')({
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const FilterAndSearch = styled('div')({
  height: "10%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});


const BulletinBoard = () => {
  const boardItem = ["자유게시판", "동아리 이모저모", "사전게시판", "정보게시판"];
  const barItem = ["제목", "작성자", "작성일", "조회수", "댓글"];
  const itemContents = ["공지", "자유게시판 공지입니다.", "문희조", "2022.08.03", "1234", "123"];
  const inputItem = ["전체기간", "게시글 + 작성자"];

  return (
    <BoardArea>
      <TitleArea>
        <TitleBox>자유게시판</TitleBox>
        <Button sx={{backgroundColor: "white", 
          height: "3.3vh", 
          color: "black", 
          fontWeight: "700", 
          marginLeft: "75%",
          "&:hover": {backgroundColor: "white"}}}>글쓰기</Button>
      </TitleArea>
      <ContentArea>
        <SideBar title={"BOARD"}
          color={"#2F4842"}
          width={"13%"}
          items={boardItem}/>
        <ListArea>
          <ListBar>
            <BarItemBox>
              {barItem.map((item) => <BarItem key={item}>{item}</BarItem>)}
            </BarItemBox>
          </ListBar>
          <ListBox>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
            <ListThem>
              <ItemBox>
                {itemContents.map((item) => <ListItem key={item}>{item}</ListItem>)}
              </ItemBox>
            </ListThem>
          </ListBox>
          <PaginationArea>
            <Pagination count={10} shape="rounded" color='primary'/>
          </PaginationArea>
          <FilterAndSearch>
            {inputItem.map((item) => <FormControl sx={{ m: 1, width: 160}} size="small" key={item}>
              <InputLabel id="demo-select-small" sx={{fontSize: "12px", p: "1px 0 1px 10px", color: "#adb5bd"}}>{item}</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label={item}
                sx={{borderRadius: "15px", backgroundColor: "#4B4B4B"}}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
              </Select>
            </FormControl>)}
            <Paper
              component="form"
              sx={{display: 'flex', 
                  width: 250, 
                  height: 30, 
                  borderRadius: "15px", 
                  backgroundColor: "#4B4B4B",
                  border: "2px solid #adb5bd",
                  ml: 2,
                  }}
              >
              <IconButton type="button" sx={{pl: "10px"}} aria-label="search">
                <SearchIcon  sx={{color: "#adb5bd", p: '0 0 0 5px'}}/>
              </IconButton>
              <InputBase placeholder="게시글 + 작성자" sx={{ ml: 1, flex: 1, color: "#adb5bd"}}/>
            </Paper>
          </FilterAndSearch>
        </ListArea>
      </ContentArea>
    </BoardArea>
  )
}

export default BulletinBoard;
