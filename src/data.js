import { AiFillDashboard, AiOutlineSave } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { FaShare } from "react-icons/fa"
import { IoIosSettings } from "react-icons/io"
import { MdOutlineAccountBalanceWallet } from "react-icons/md"
import { RiLuggageDepositLine } from "react-icons/ri"
import { VscReferences } from "react-icons/vsc"

const investmentPlans = [
    {
        id: 'basic10835',
        duration: 24,
        min: 50,
        max: 500,
        name: 'basic',
        interest: 20
    },
    {
        id: "standardfei3",
        duration: 48,
        min: 600,
        max: 999,
        name: 'standard',
        interest: 30
    },
    {
        id: "advance4jk56k",
        duration: 72,
        min: 1000,
        max: 5000,
        name: 'advance',
        interest: 45
    },
    {
        id: "premiumk53kif",
        duration: 24,
        min: 6000,
        max: 50000,
        name: 'premium',
        interest: 60
    },
]



const sidebarLinks = [
    {
        id: 1,
        link: '/dashboard',
        icon: <AiFillDashboard style={{marginRight: 20}} />,
        text: 'Dashboard',
        isActive: true
    },
    {
        id: 2,
        link: '/dashboard/deposit',
        icon: <BsCurrencyDollar style={{marginRight: 20}} />,
        text: 'Deposit',
        isActive: false
    },
    {
        id: 3,
        link: '/dashboard/invest',
        text: 'Invest',
        icon: <RiLuggageDepositLine style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 4,
        link: '/dashboard/investments',
        text: 'Investments',
        icon: <AiOutlineSave style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 5,
        link: '/dashboard/withdraw',
        text: 'Withdraw',
        icon: <BsCurrencyDollar style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 6,
        link: '/dashboard/transfer',
        text: 'Transfer',
        icon: <FaShare style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 7,
        link: '/dashboard/referral',
        text: 'Referral',
        icon: <VscReferences style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 8,
        link: '/dashboard/balance',
        text: 'Balance',
        icon: <MdOutlineAccountBalanceWallet style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 9,
        link: '/dashboard/profile',
        text: 'Profile',
        icon: <CgProfile style={{marginRight: 20}} />,
        isActive: false
    },
    {
        id: 10,
        link: '/dashboard/settings',
        text: 'Settings',
        icon: <IoIosSettings style={{marginRight: 20}} />,
        isActive: false
    },
    // {
    //     id: 11,
    //     link: '/dashboard/stock-market',
    //     text: 'Stock Market',
    //     icon: <SiMarketo style={{marginRight: 20}} />,
    //     isActive: false
    // },
]

export {investmentPlans, sidebarLinks}
