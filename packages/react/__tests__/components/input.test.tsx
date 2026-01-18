import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Input } from '../../src/components';

describe('component > Input', () => {
  it('렌더링 여부', () => {
    render(<Input dataTestId="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeInTheDocument();
  });

  it('입력값 변경 테스트', () => {
    render(<Input dataTestId="test-input" />);
    const input = screen.getByTestId('test-input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input).toHaveValue('test');
  });

  it('기본 CSS 클래스 적용 여부 테스트', () => {
    render(<Input dataTestId="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('inf-lib-test-input');
  });

  it('추가 CSS 클래스 적용 여부 테스트', () => {
    render(<Input dataTestId="test-input" className="test-class" />);
    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('inf-lib-test-input');
    expect(input).toHaveClass('test-class');
  });
});
