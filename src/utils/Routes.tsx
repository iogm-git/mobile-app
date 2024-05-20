import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ####### IOGM - User #######
// === Guest ===
import HomeScreen from '@root/views/user/guest/HomeScreen';
import Login from '@root/views/user/guest/Login';
import Register from '@root/views/user/guest/Register';
// -- password --
import Forgot from '@root/views/user/guest/password/Forgot';
import Reset from '@root/views/user/guest/password/Reset';
// === Guest ===
// === Member ===
import Setting from '@root/views/user/member/Setting';
import Ballot from '@root/views/user/member/Ballot';
// -- Code App --
import Instructor from '@root/views/user/member/code/Instructor';
import CodeRegister from '@root/views/user/member/code/Register';
// === Member ===
// ####### IOGM - User #######

// ####### IOGM - Shop #######
// === Guest ===
import ShopHomeScreen from '@root/views/shop/guest/HomeScreen';
import Show from '@root/views/shop/guest/Show';
// === Guest ===
// === Member ===
import ShopProfile from '@root/views/shop/member/Profile';
import ShopStashes from '@root/views/shop/member/Stashes';
import ShopTransactions from '@root/views/shop/member/Transactions';
import ShopDownload from '@root/views/shop/member/Download';
import ShopPurchases from '@root/views/shop/member/Purchases';
// === Member ===
// ####### IOGM - Shop #######

// ####### IOGM - Code #######
// === Guest ===
import CodeHomeScreen from '@root/views/code/guest/HomeScreen';
import Courses from '@root/views/code/guest/Courses';
import Certificates from '@root/views/code/guest/Certificates';
// === Guest ===
// === Member ===
// --- General ---
import DiscussionForums from '@root/views/code/member/general/DiscussionForums';
import CodeSetting from '@root/views/code/member/general/Setting';
// --- General ---
// --- Instructor ---
import InstructorProfile from '@root/views/code/member/instructor/Profile';
import InstructorCourses from '@root/views/code/member/instructor/studies/Courses';
import InstructorFormCourse from '@root/views/code/member/instructor/studies/Form';
import InstructorSections from '@root/views/code/member/instructor/studies/sections/Sections';
import InstructorFormSection from '@root/views/code/member/instructor/studies/sections/Form';
import InstructorLessons from '@root/views/code/member/instructor/studies/sections/lessons/Lessons';
import InstructorFormLesson from '@root/views/code/member/instructor/studies/sections/lessons/Form';
import Earnings from '@root/views/code/member/instructor/Earnings';
import Questions from '@root/views/code/member/instructor/Questions';
import Reviews from '@root/views/code/member/instructor/Reviews';
// --- Instructor ---
// --- Student ---
import StudentProfile from '@root/views/code/member/student/Profile';
import StudentCourses from '@root/views/code/member/student/studies/Courses';
import StudentSections from '@root/views/code/member/student/studies/Sections';
import StudentLessons from '@root/views/code/member/student/studies/Lessons';
import StudentQuestion from '@root/views/code/member/student/studies/Question';
import StudentReview from '@root/views/code/member/student/studies/Review';
import StudentCertificates from '@root/views/code/member/student/Certificates';
import StudentReviews from '@root/views/code/member/student/Reviews';
import StudentStashes from '@root/views/code/member/student/Stashes';
import StudentTransactions from '@root/views/code/member/student/Transactions';
import Answers from '@root/views/code/member/student/Answers';
// --- Student ---
// === Member ===
// ####### IOGM - Code #######

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Group>
                    {/* User - Guest */}
                    <Stack.Screen name="user-guest-HomeScreen" component={HomeScreen} />
                    <Stack.Screen name="user-guest-Login" component={Login} />
                    <Stack.Screen name="user-guest-Register" component={Register} />
                    <Stack.Screen name="user-guest-password-Forgot" component={Forgot} />
                    <Stack.Screen name="user-guest-password-Reset" component={Reset} />

                    {/* User - Member */}
                    <Stack.Screen name="user-member-Setting" component={Setting} />
                    <Stack.Screen name="user-member-Ballot" component={Ballot} />
                    <Stack.Screen name="user-member-code-Instructor" component={Instructor} />
                    <Stack.Screen name="user-member-code-Register" component={CodeRegister} />
                </Stack.Group>

                <Stack.Group>
                    {/* Shop - Guest */}
                    <Stack.Screen name="shop-guest-HomeScreen" component={ShopHomeScreen} />
                    <Stack.Screen name="shop-guest-Show" component={Show} />

                    {/* Shop - Member */}
                    <Stack.Screen name="shop-member-Profile" component={ShopProfile} />
                    <Stack.Screen name="shop-member-Stashes" component={ShopStashes} />
                    <Stack.Screen name="shop-member-Transactions" component={ShopTransactions} />
                    <Stack.Screen name="shop-member-Download" component={ShopDownload} />
                    <Stack.Screen name="shop-member-Purchases" component={ShopPurchases} />
                </Stack.Group>

                <Stack.Group>
                    {/* Code - Guest */}
                    <Stack.Screen name="code-guest-HomeScreen" component={CodeHomeScreen} />
                    <Stack.Screen name="code-guest-Courses" component={Courses} />
                    <Stack.Screen name="code-guest-Certificates" component={Certificates} />

                    {/* Code - Member - General */}
                    <Stack.Screen name="code-member-general-DiscussionForums" component={DiscussionForums} />
                    <Stack.Screen name="code-member-general-Setting" component={CodeSetting} />

                    {/* Code - Member - Instructor */}
                    <Stack.Screen name="code-member-instructor-Profile" component={InstructorProfile} />
                    <Stack.Screen name="code-member-instructor-Courses" component={InstructorCourses} />
                    <Stack.Screen name="code-member-instructor-Store-Course">
                        {() => <InstructorFormCourse type="store" />}
                    </Stack.Screen>
                    <Stack.Screen name="code-member-instructor-Update-Course">
                        {() => <InstructorFormCourse type="update" />}
                    </Stack.Screen>
                    <Stack.Screen name="code-member-instructor-Sections" component={InstructorSections} />
                    <Stack.Screen name="code-member-instructor-Store-Section">
                        {() => <InstructorFormSection type="store" />}
                    </Stack.Screen>
                    <Stack.Screen name="code-member-instructor-Update-Section">
                        {() => <InstructorFormSection type="update" />}
                    </Stack.Screen>
                    <Stack.Screen name="code-member-instructor-Lessons" component={InstructorLessons} />
                    <Stack.Screen name="code-member-instructor-Store-Lesson">
                        {() => <InstructorFormLesson type="store" />}
                    </Stack.Screen>
                    <Stack.Screen name="code-member-instructor-Update-Lesson">
                        {() => <InstructorFormLesson type="update" />}
                    </Stack.Screen>
                    <Stack.Screen name="code-member-instructor-Earnings" component={Earnings} />
                    <Stack.Screen name="code-member-instructor-Questions" component={Questions} />
                    <Stack.Screen name="code-member-instructor-Reviews" component={Reviews} />

                    {/* Code - Member - Student */}
                    <Stack.Screen name="code-member-student-Profile" component={StudentProfile} />
                    <Stack.Screen name="code-member-student-Courses" component={StudentCourses} />
                    <Stack.Screen name="code-member-student-Sections" component={StudentSections} />
                    <Stack.Screen name="code-member-student-Lessons" component={StudentLessons} />
                    <Stack.Screen name="code-member-student-Question" component={StudentQuestion} />
                    <Stack.Screen name="code-member-student-Review" component={StudentReview} />
                    <Stack.Screen name="code-member-student-Certificates" component={StudentCertificates} />
                    <Stack.Screen name="code-member-student-Stashes" component={StudentStashes} />
                    <Stack.Screen name="code-member-student-Transactions" component={StudentTransactions} />
                    <Stack.Screen name="code-member-student-Reviews" component={StudentReviews} />
                    <Stack.Screen name="code-member-student-Answers" component={Answers} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
