// NOTE this is part of a solution with the goal to mock node-fetch
// but unfortunately it does not work currently
import "reflect-metadata";
import { jest } from '@jest/globals';
import fetch from "jest-fetch-mock";
jest.setMock('node-fetch', fetch);
fetch.enableMocks();