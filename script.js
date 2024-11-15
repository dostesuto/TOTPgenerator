function generateTOTP() {
    const secret = document.getElementById("secret").value;

    if (!secret) {
        alert("シークレットキーを入力してください！");
        return;
    }

    try {
        const totp = new OTPAuth.TOTP({
            secret: OTPAuth.Secret.fromB32(secret),  // Base32シークレットを使用
            algorithm: "SHA-1",
            digits: 6,
            period: 30,
        });
        const token = totp.generate();
        document.getElementById("otp").textContent = `現在のTOTP: ${token}`;
    } catch (error) {
        alert("無効なシークレットキーです！");
        console.error(error);
    }
}
