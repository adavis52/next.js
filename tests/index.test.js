import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

describe('Home Page', () => {
    test("renders at least one link to https://vercel.com in the first child of 'main' ", () => {
        const { container } = render(<Home />);

        const child = container.querySelector('h1');

        expect(child).toBeTruthy();

        const childLinks = child.querySelectorAll("a");

        expect(childLinks.length).toBeGreaterThan(0);

        let githubLinks = 0;
        childLinks.forEach(link => {
            if (link.href.includes("https://github.com"))
                githubLinks++;
        });

        expect(githubLinks).toBeGreaterThan(0);
    });
});