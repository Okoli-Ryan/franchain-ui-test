import CardReceive from "@icons/icons-2/card-receive.svg";
import EmptyWalletChange from "@icons/icons-2/empty-wallet-change.svg";
import Flash from "@icons/icons-2/flash.svg";
import MoneyReceive from "@icons/icons-2/money-recive.svg";
import NotificationBell from "@icons/icons-2/notification.svg";
import Teacher from "@icons/icons-2/teacher.svg";
import UserCircleCard from "@icons/icons-2/user-cirlce-add.svg";

export default function IconTest() {
	return (
		<div className="flex flex-col gap-5">
			<IconButton icon={Flash} label={"Auto withdraw on"} />
			<IconButton icon={CardReceive} label={"Withdraw"} />
			<IconButton icon={MoneyReceive} label={"Create collection"} />
			<IconButton icon={Teacher} label={"Support center"} />
			<IconButton icon={UserCircleCard} label={"Invite operator"} />
			<IconButton icon={EmptyWalletChange} label={"Create account"} />
			<IconButton icon={NotificationBell} label={"Send reminder"} />
		</div>
	);
}

function IconButton({ icon, label }: { icon: string; label: string }) {
	return (
		<button className="px-[25px] py-[15px] bg-[#2C2C2C] flex items-center gap-[10px] rounded-[10px] w-max hover:bg-[#2C2C2C]/90 transition-all duration-200">
			<img src={icon} className="w-[30px] h-[30px]" />
			<span className="text-white text-[16px] leading-5">{label}</span>
		</button>
	);
}
