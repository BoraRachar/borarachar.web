const checkEmailExists = async (email: string) => {
  try {
    const response = await fetch("/api/forgotPassword", {
      body: JSON.stringify({ email }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.ok;
  } catch (error) {
    console.log("Error ao verificar email:", error);
    return false;
  }
}

export default checkEmailExists;