import express from "express";
import Index from "../controller/common/indexList";
import coach from "../controller/common/Convertor";
import membership from "../controller/common/DataGroup";
import Comments from "../controller/common/Comments"
import timetable from "../controller/common/Manager"
import course from "../controller/common/BeMembership"
import Test from "../controller/common/Test"
import Register from '../controller/login/register'
import user from '../controller/login/register'
/*
*
* 数据渲染的主要路由
* 功能：渲染各个页面的数据
*
* */
const router = express.Router();


router.get("/index", Index.index);    //首页
router.get("/carousel", Index.indexCarouselRender);    //首页轮播图
router.get("/coach", Release.coach);  //获取全部教练数据
router.get("/coach/:page", coach.releasedMovieRender);  //分页
router.get("/membership", membership.membership);  //获取全部学员
router.get("/membership/:membership", membership.membership);  //分页
router.get("/course/:courseId", course.course);  //获取单个课程
router.get("/movies/:managerId", course.managerId);  //获取单个管理者
router.get("/comments/:Comments", Comments.getComments);  //获取单个Comments
router.get("/timetable/:timetableId", timetable.getSpecifictimetable);  //获取单个课表
router.get("/beMembership", Books.getAllBooks);  //成为会员
router.get("/beMembership/:MembershipId", membership.getSpecificBook);  //会员id
router.get("/beUser/:beUserId", user.getSpecificBook);  //用户id
router.get("/show/:showId", Test.getSpecificShow);  //测试


router.post("/register/", Register.handleReg);  //处理注册



export default router;
