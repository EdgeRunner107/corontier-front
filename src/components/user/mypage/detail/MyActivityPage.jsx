import React, { useState } from 'react'
import { useEffect } from 'react'
import { Nav} from 'react-bootstrap'
import Comments from './myActivityComponent/Comments'
import Posts from './myActivityComponent/Posts'
import Projects from './myActivityComponent/Projects'
import Scraps from './myActivityComponent/Scraps'
const MyActivityPage = () => {
  let [tab, setTab] = useState(0)

  return (
    <div className='contents'>
      {/* ui는 천천히 수정예정 */}
      {/* 글 filter걸어서 조회하는거 생각해보기*/}
      <Nav fill className="mt-5" variant="tabs" defaultActiveKey="0">
        <Nav.Item>
          <Nav.Link eventKey="0" onClick={() => setTab(0)}>
            작성글
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="1" onClick={() => setTab(1)}>
            내가쓴 댓글
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" onClick={() => setTab(2)}>
            프로젝트
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" onClick={() => setTab(3)}>
            스크랩한 글
          </Nav.Link>
        </Nav.Item>
      </Nav>
      
      {tab === 0 && <Posts />}
      {tab === 1 && <Comments />}
      {tab === 2 && <Projects />}
      {tab === 3 && <Scraps />}
    

    </div>
  )
}

export default MyActivityPage