import {TypedUseSelectorHook, useDispatch} from "react-redux";
import { AppDispatch } from "./store";
import { RootState } from "@reduxjs/toolkit/query";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;