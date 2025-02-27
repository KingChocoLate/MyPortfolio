import Image from "next/image";

export default function Home() {
  return (
    <body class="bg-gray-950 text-white">
    <div class="mx-16 mt-5 flex flex-col items-center w-auto h-[50px] text-[10px] gap-5">
        <div class="flex justify-between w-full opacity-25">
            <div>freedomearning123@gmail.com</div>
            <p>facebook / Telegram / Instagram</p>
        </div>
        <div class="border border-gray-400 opacity-25 w-full"></div>
    </div>
    <div class="mt-10 flex flex-col items-center gap-5">
        <div class="bg-white w-20 h-20 rounded-full"></div>
        <p class="text-[10px] text-gray-500">Hi, I'm Odom</p>
        <div class="text-3xl animate-pulse">
            <p class="text-center">Building digital</p>
            <p class="text-center">products, brands, and</p>
            <p class="text-center">experience.</p>
        </div>
        <button id="bttn" class="text-[8px] text-gray-300 bg-black w-[120px] h-[40px] rounded-lg">About Me</button>
    </div>

    <div class="mt-10 w-full h-[130px] bg-gray-800"></div>

    <div class="mt-20 text-xl animate-pulse">
        <p class="text-center">Collaborate with brands and agencies to</p>
        <p class="text-center">create impactful results.</p>
    </div>

    <div class="mt-10 mx-3 flex justify-center gap-3">
        <div class="w-[180px] h-[200px] bg-gray-800"></div>
        <div class="w-[180px] h-[200px] bg-gray-800"></div>
        <div class="w-[180px] h-[200px] bg-gray-800"></div>
        <div class="w-[180px] h-[200px] bg-gray-800"></div>
    </div>

    <script src="PortfolioJs.js"></script>
</body>
  );
}
