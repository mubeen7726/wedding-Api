import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../AuthProvider/AuthProvider";

export default function FormInputs() {
  const [response, setResponse] = useState("");
  const [authuser, setAuthuser] = useAuth();
  console.log(authuser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAcceptSubmit = async (data) => {
    const userInfo = {
      songname: data.songname,
      username: data.username,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      const user = await axios.post("https://wedding-api-teal.vercel.app/user/accpet", userInfo);
      if (user) {
        toast.success("Data successfully saved for accepted user!");
        localStorage.setItem("UserInfo", JSON.stringify(user.data));
        setAuthuser(user.data);
      }
      console.log(user);
    } catch (error) {
      toast.error("Error saving accepted data!");
      console.error("Accepted Data Error:", error);
    }
  };

  const onRejectSubmit = async (data) => {
    const rejectInfo = {
      username: data.username,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      const user = await axios.post("https://wedding-api-eight.vercel.app/user/reject", rejectInfo);
      if (user) {
        toast.success("Rejection recorded successfully!");
        localStorage.setItem("UserInfo", JSON.stringify(user.data));
        setAuthuser(user.data);
      }
      console.log(user);
    } catch (error) {
      toast.error("Error saving rejection data!");
      console.error("Rejection Data Error:", error);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <div className="d-flex justify-content-center mb-4">
          <button
            className={`btn d-flex align-items-center me-3 px-4 py-2 w-75 ${
              response === "accept" ? "active border-dark" : ""
            }`}
            onClick={() => setResponse("accept")}
          >
            <FaHeart className="me-2" />
            Happily Accept
          </button>

          <button
            className={`btn d-flex align-items-center px-4 py-2 w-75 ${
              response === "decline" ? "active border-dark" : ""
            }`}
            onClick={() => setResponse("decline")}
          >
            <FaHeartBroken className="me-2" />
            Regretfully Decline
          </button>
        </div>
        {!response && (
          <>
            <div className="card p-4" style={{ border: "none" }}>
              <h4 className="fw-bold text-center">Contact Us</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" disabled />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" disabled />
                </div>
                <input type="submit" disabled className="btn text-white bg-dark w-100" value="Submit" />
              </form>
            </div>
          </>
        )}
        {response === "accept" && (
          <div className="card p-4" style={{ border: "none" }}>
            <form onSubmit={handleSubmit(onAcceptSubmit)}>
              <h4 className="fw-bold text-center">Acceptance Form</h4>
              <div className="mb-3">
                <label className="form-label">Song Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("songname", { required: true })}
                  placeholder="Ex: song name - singer name"
                />
                {errors.songname && <p className="fw-semibold text-danger">Please Enter Song....</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register("username", { required: true })} />
                {errors.username && <p className="text-danger fw-semibold">Please Enter Name....</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" {...register("email", { required: true })} />
                {errors.email && <p className="fw-semibold text-danger">Please Enter Email....</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" {...register("phone", { required: true })} />
                {errors.phone && <p className="text-danger fw-semibold">Please Enter Phone Number....</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" {...register("message", { required: true })} placeholder="Enter your message..." />
                {errors.message && <p className="text-danger fw-semibold">Please Enter a Message....</p>}
              </div>
              <input type="submit" className="btn text-white bg-dark w-100" value="Submit" />
            </form>
          </div>
        )}
        {response === "decline" && (
          <div className="card p-4" style={{ border: "none" }}>
            <form onSubmit={handleSubmit(onRejectSubmit)}>
              <h4 className="fw-bold text-center">Rejection Form</h4>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" {...register("username", { required: true })} />
                {errors.username && <p className="text-danger fw-semibold">Please Enter Name....</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" {...register("email", { required: true })} />
                {errors.email && <p className="fw-semibold text-danger">Please Enter Email....</p>}
              </div>
          
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" {...register("phone", { required: true })} />
                {errors.phone && <p className="text-danger fw-semibold">Please Enter Phone Number....</p>}
              </div>
              <div className="mb-3">
                <label className="form-label">Reason for Declining</label>
                <textarea className="form-control" {...register("message", { required: true })} placeholder="Enter reason..." />
                {errors.message && <p className="text-danger fw-semibold">Please Enter a Reason....</p>}
              </div>
              <input type="submit" className="btn text-white bg-dark w-100" value="Submit Rejection" />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}